import { useState, useEffect } from 'react';
import { getMessages, markAsRead, markAsReplied, deleteMessage } from '@lib/firebase/messages';
import { Message } from '@types';
import { MailOpen, Reply, Trash2 } from 'lucide-react';

export default function MessagesInbox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, [filter]);

  const fetchMessages = async () => {
    try {
      const data = await getMessages(filter);
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkRead = async (id: string) => {
    await markAsRead(id);
    await fetchMessages();
  };

  const handleMarkReplied = async (id: string) => {
    await markAsReplied(id);
    await fetchMessages();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this message?')) {
      await deleteMessage(id);
      await fetchMessages();
    }
  };

  const unreadCount = messages.filter(m => !m.read).length;

  if (loading) {
    return <div className="text-zinc-500 font-mono text-sm animate-pulse">Loading messages...</div>;
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-medium tracking-tight">Messages</h2>
          <p className="font-mono text-sm text-zinc-500 mt-1">
            {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 font-mono text-sm border transition ${
              filter === 'all' ? 'border-white/30 text-white' : 'border-white/10 text-zinc-500 hover:text-white'
            }`}
          >
            All ({messages.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`px-4 py-2 font-mono text-sm border transition ${
              filter === 'unread' ? 'border-white/30 text-white' : 'border-white/10 text-zinc-500 hover:text-white'
            }`}
          >
            Unread ({unreadCount})
          </button>
          <button
            onClick={() => setFilter('read')}
            className={`px-4 py-2 font-mono text-sm border transition ${
              filter === 'read' ? 'border-white/30 text-white' : 'border-white/10 text-zinc-500 hover:text-white'
            }`}
          >
            Read ({messages.filter(m => m.read).length})
          </button>
        </div>
      </div>

      <div className="border border-white/10 divide-y divide-white/10">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-6 transition ${!message.read ? 'bg-white/5' : ''}`}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h4 className="font-mono text-sm font-medium">{message.name}</h4>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 break-all">
                    {message.email}
                  </span>
                  {!message.read && (
                    <span className="font-mono text-[8px] uppercase tracking-wider bg-white/10 px-2 py-1 text-white">
                      New
                    </span>
                  )}
                  {message.replied && (
                    <span className="font-mono text-[8px] uppercase tracking-wider border border-white/10 px-2 py-1 text-zinc-400">
                      ✓ Replied
                    </span>
                  )}
                </div>
                <p className="font-mono text-sm text-zinc-400 mb-2">
                  {message.subject}
                </p>
                <p className="font-mono text-sm text-zinc-500 leading-relaxed whitespace-pre-wrap">
                  {message.message}
                </p>
                {message.phone && (
                  <p className="font-mono text-[10px] text-zinc-600 mt-2">
                    Phone: {message.phone}
                  </p>
                )}
                <p className="font-mono text-[10px] text-zinc-600 mt-2">
                  {message.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'} • {message.createdAt?.toDate?.()?.toLocaleTimeString() || 'N/A'}
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                {!message.read && (
                  <button
                    onClick={() => handleMarkRead(message.id)}
                    className="p-2 text-zinc-500 hover:text-white transition"
                    title="Mark as read"
                  >
                    <MailOpen className="h-4 w-4" />
                  </button>
                )}
                {!message.replied && (
                  <button
                    onClick={() => handleMarkReplied(message.id)}
                    className="p-2 text-zinc-500 hover:text-white transition"
                    title="Mark as replied"
                  >
                    <Reply className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(message.id)}
                  className="p-2 text-zinc-500 hover:text-red-400 transition"
                  title="Delete"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {messages.length === 0 && (
          <div className="p-8 text-center text-zinc-500 font-mono text-sm">
            No messages found.
          </div>
        )}
      </div>
    </div>
  );
}
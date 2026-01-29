import { useState, useEffect } from 'react';
import { StickyNote, X, Plus, Trash2, Edit2, Save, BookOpen } from 'lucide-react';

const STORAGE_KEY = 'pashto-learning-notes';

export default function NotesManager() {
    const [isOpen, setIsOpen] = useState(false);
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', content: '', category: 'vocabulary' });
    const [editingId, setEditingId] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    // Load notes from localStorage
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                setNotes(JSON.parse(saved));
            }
        } catch (error) {
            console.error('Error loading notes:', error);
        }
    }, []);

    // Save notes to localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    const categories = [
        { value: 'vocabulary', label: 'لغت جدید', icon: '📚' },
        { value: 'grammar', label: 'نکته گرامری', icon: '📝' },
        { value: 'phrase', label: 'عبارت', icon: '💬' },
        { value: 'question', label: 'سوال', icon: '❓' },
        { value: 'other', label: 'سایر', icon: '📌' },
    ];

    const addNote = () => {
        if (!newNote.title.trim() || !newNote.content.trim()) return;

        const note = {
            id: Date.now(),
            ...newNote,
            createdAt: new Date().toISOString(),
        };

        setNotes([note, ...notes]);
        setNewNote({ title: '', content: '', category: 'vocabulary' });
        setShowAddForm(false);
    };

    const deleteNote = (id) => {
        if (confirm('آیا می‌خواهید این یادداشت را حذف کنید؟')) {
            setNotes(notes.filter(note => note.id !== id));
        }
    };

    const startEdit = (note) => {
        setEditingId(note.id);
        setNewNote({ title: note.title, content: note.content, category: note.category });
        setShowAddForm(true);
    };

    const saveEdit = () => {
        if (!newNote.title.trim() || !newNote.content.trim()) return;

        setNotes(notes.map(note =>
            note.id === editingId
                ? { ...note, ...newNote, updatedAt: new Date().toISOString() }
                : note
        ));
        setEditingId(null);
        setNewNote({ title: '', content: '', category: 'vocabulary' });
        setShowAddForm(false);
    };

    const cancelEdit = () => {
        setEditingId(null);
        setNewNote({ title: '', content: '', category: 'vocabulary' });
        setShowAddForm(false);
    };

    const getCategoryLabel = (value) => {
        return categories.find(c => c.value === value)?.label || value;
    };

    const getCategoryIcon = (value) => {
        return categories.find(c => c.value === value)?.icon || '📌';
    };

    const getNotesCount = () => notes.length;

    return (
        <>
            {/* Notes Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 sm:p-2.5 rounded-xl border transition-all active:scale-95 group ${isOpen
                        ? 'bg-purple-500/20 border-purple-500 shadow-lg shadow-purple-500/20'
                        : 'bg-slate-800/40 border-purple-500/20 hover:border-purple-500/40'
                    }`}
                title="یادداشت‌های من"
            >
                <StickyNote className={`w-5 h-5 ${isOpen ? 'text-purple-400' : 'text-purple-400 group-hover:rotate-12'} transition-transform`} />
                {getNotesCount() > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-lg animate-pulse">
                        {getNotesCount()}
                    </span>
                )}
            </button>

            {/* Notes Panel */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[70]"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Panel */}
                    <div className="fixed top-16 left-0 sm:left-4 sm:top-20 w-full sm:w-[400px] h-[calc(100vh-4rem)] sm:h-[calc(100vh-6rem)] bg-slate-900/98 border border-slate-700 sm:rounded-2xl shadow-2xl z-[80] overflow-hidden backdrop-blur-xl animate-in slide-in-from-top duration-300">
                        {/* Header */}
                        <div className="bg-gradient-to-l from-purple-600 to-indigo-600 px-6 py-4 border-b border-purple-500/30">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                        <StickyNote className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-white">یادداشت‌های من</h2>
                                        <p className="text-xs text-purple-100">زما یادښتونه</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col h-[calc(100%-5rem)]">
                            {/* Add Note Button */}
                            {!showAddForm && (
                                <div className="p-4 border-b border-slate-700">
                                    <button
                                        onClick={() => setShowAddForm(true)}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 rounded-xl border border-purple-500/30 transition-all group"
                                    >
                                        <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                                        <span className="font-bold">یادداشت جدید</span>
                                    </button>
                                </div>
                            )}

                            {/* Add/Edit Form */}
                            {showAddForm && (
                                <div className="p-4 border-b border-slate-700 bg-slate-800/30 space-y-3">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1.5">عنوان (پشتو یا فارسی)</label>
                                        <input
                                            type="text"
                                            value={newNote.title}
                                            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                                            placeholder="مثلاً: واغوندی"
                                            className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 text-sm focus:border-purple-500 focus:outline-none"
                                            autoFocus
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1.5">توضیحات / معنی</label>
                                        <textarea
                                            value={newNote.content}
                                            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                                            placeholder="مثلاً: به معنی پوشیده - از فعل اغوستل (پوشیدن)"
                                            className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 text-sm focus:border-purple-500 focus:outline-none resize-none"
                                            rows="3"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1.5">دسته‌بندی</label>
                                        <select
                                            value={newNote.category}
                                            onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
                                            className="w-full px-3 py-2 bg-slate-900 border border-slate-600 rounded-lg text-slate-200 text-sm focus:border-purple-500 focus:outline-none"
                                        >
                                            {categories.map(cat => (
                                                <option key={cat.value} value={cat.value}>
                                                    {cat.icon} {cat.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={editingId ? saveEdit : addNote}
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-bold transition-colors"
                                        >
                                            <Save className="w-4 h-4" />
                                            {editingId ? 'ذخیره تغییرات' : 'افزودن'}
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg font-bold transition-colors"
                                        >
                                            لغو
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Notes List */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                {notes.length === 0 ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-3">
                                            <BookOpen className="w-8 h-8 text-slate-600" />
                                        </div>
                                        <p className="text-slate-500 text-sm">هنوز یادداشتی ندارید</p>
                                        <p className="text-slate-600 text-xs mt-1">لغات و نکات جدید را اینجا ذخیره کنید</p>
                                    </div>
                                ) : (
                                    notes.map(note => (
                                        <div
                                            key={note.id}
                                            className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-purple-500/30 transition-all group"
                                        >
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <div className="flex items-center gap-2 flex-1">
                                                    <span className="text-lg">{getCategoryIcon(note.category)}</span>
                                                    <div className="flex-1">
                                                        <h3 className="font-bold text-slate-200 text-sm leading-tight">{note.title}</h3>
                                                        <span className="text-xs text-purple-400 font-medium">{getCategoryLabel(note.category)}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => startEdit(note)}
                                                        className="p-1.5 hover:bg-blue-500/20 rounded-lg text-blue-400 transition-colors"
                                                        title="ویرایش"
                                                    >
                                                        <Edit2 className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        onClick={() => deleteNote(note.id)}
                                                        className="p-1.5 hover:bg-red-500/20 rounded-lg text-red-400 transition-colors"
                                                        title="حذف"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{note.content}</p>
                                            <p className="text-slate-600 text-xs mt-2">
                                                {new Date(note.createdAt).toLocaleString('fa-IR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

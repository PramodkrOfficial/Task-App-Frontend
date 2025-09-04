// import React, { useState, useEffect } from "react";
// import { Plus, Edit2, Trash2, Save, X } from "lucide-react";

// const NotesApp = () => {
//   const [notes, setNotes] = useState([]);
//   const [isCreating, setIsCreating] = useState(false);
//   const [editingId, setEditingId] = useState(null);
//   const [formData, setFormData] = useState({ title: "", content: "" });

//   // Mock data for frontend testing (replace with API calls later)
//   useEffect(() => {
//     setNotes([
//       {
//         id: 1,
//         title: "Sample Note",
//         content: "This is a sample note content",
//         createdAt: new Date().toISOString(),
//       },
//       {
//         id: 2,
//         title: "Another Note",
//         content: "Another sample content",
//         createdAt: new Date().toISOString(),
//       },
//     ]);
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleCreate = () => {
//     if (formData.title.trim() && formData.content.trim()) {
//       const newNote = {
//         id: Date.now(),
//         title: formData.title,
//         content: formData.content,
//         createdAt: new Date().toISOString(),
//       };
//       setNotes([newNote, ...notes]);
//       setFormData({ title: "", content: "" });
//       setIsCreating(false);
//     }
//   };

//   const handleEdit = (note) => {
//     setEditingId(note.id);
//     setFormData({ title: note.title, content: note.content });
//   };

//   const handleUpdate = () => {
//     if (formData.title.trim() && formData.content.trim()) {
//       setNotes(
//         notes.map((note) =>
//           note.id === editingId
//             ? { ...note, title: formData.title, content: formData.content }
//             : note
//         )
//       );
//       setEditingId(null);
//       setFormData({ title: "", content: "" });
//     }
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this note?")) {
//       setNotes(notes.filter((note) => note.id !== id));
//     }
//   };

//   const handleCancel = () => {
//     setIsCreating(false);
//     setEditingId(null);
//     setFormData({ title: "", content: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4">
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">My Notes</h1>

//           {/* Create/Edit Form */}
//           {(isCreating || editingId) && (
//             <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Note title..."
//                 value={formData.title}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <textarea
//                 name="content"
//                 placeholder="Write your note content here..."
//                 value={formData.content}
//                 onChange={handleInputChange}
//                 rows="4"
//                 className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
//               />
//               <div className="flex gap-2">
//                 <button
//                   onClick={editingId ? handleUpdate : handleCreate}
//                   className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   <Save size={16} />
//                   {editingId ? "Update" : "Save"}
//                 </button>
//                 <button
//                   onClick={handleCancel}
//                   className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
//                 >
//                   <X size={16} />
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Add Note Button */}
//           {!isCreating && !editingId && (
//             <button
//               onClick={() => setIsCreating(true)}
//               className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mb-6"
//             >
//               <Plus size={16} />
//               Add New Note
//             </button>
//           )}
//         </div>

//         {/* Notes List */}
//         <div className="space-y-4">
//           {notes.length === 0 ? (
//             <div className="text-center py-12 bg-white rounded-lg shadow-md">
//               <p className="text-gray-500 text-lg">
//                 No notes yet. Create your first note!
//               </p>
//             </div>
//           ) : (
//             notes.map((note) => (
//               <div
//                 key={note.id}
//                 className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-xl font-semibold text-gray-800">
//                     {note.title}
//                   </h3>
//                   <div className="flex gap-2">
//                     <button
//                       onClick={() => handleEdit(note)}
//                       className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                       disabled={editingId === note.id}
//                     >
//                       <Edit2 size={16} />
//                     </button>
//                     <button
//                       onClick={() => handleDelete(note.id)}
//                       className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 mb-3 whitespace-pre-wrap">
//                   {note.content}
//                 </p>
//                 <p className="text-sm text-gray-400">
//                   Created: {new Date(note.createdAt).toLocaleDateString()}
//                 </p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotesApp;



// src/components/NotesApp.jsx (Updated with API integration)
import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, AlertCircle, Loader } from 'lucide-react';
import { noteService } from '../services/NoteService';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  // Load notes on component mount
  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedNotes = await noteService.getAllNotes();
      setNotes(fetchedNotes);
    } catch (err) {
      setError(err.message);
      console.error('Error loading notes:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreate = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Title and content are required');
      return;
    }

    try {
      setSaving(true);
      setError(null);
      const newNote = await noteService.createNote(formData);
      setNotes([newNote, ...notes]);
      setFormData({ title: '', content: '' });
      setIsCreating(false);
    } catch (err) {
      setError(err.message);
      console.error('Error creating note:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (note) => {
    setEditingId(note.id);
    setFormData({ title: note.title, content: note.content });
    setError(null);
  };

  const handleUpdate = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      setError('Title and content are required');
      return;
    }

    try {
      setSaving(true);
      setError(null);
      const updatedNote = await noteService.updateNote(editingId, formData);
      setNotes(notes.map(note => 
        note.id === editingId ? updatedNote : note
      ));
      setEditingId(null);
      setFormData({ title: '', content: '' });
    } catch (err) {
      setError(err.message);
      console.error('Error updating note:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this note?')) {
      return;
    }

    try {
      setError(null);
      await noteService.deleteNote(id);
      setNotes(notes.filter(note => note.id !== id));
    } catch (err) {
      setError(err.message);
      console.error('Error deleting note:', err);
    }
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingId(null);
    setFormData({ title: '', content: '' });
    setError(null);
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Invalid date';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader className="animate-spin" size={20} />
          <span>Loading notes...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">My Notes</h1>
          
          {/* Error Display */}
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
              <AlertCircle size={20} />
              <span>{error}</span>
              <button 
                onClick={() => setError(null)}
                className="ml-auto text-red-600 hover:text-red-800"
              >
                <X size={16} />
              </button>
            </div>
          )}
          
          {/* Create/Edit Form */}
          {(isCreating || editingId) && (
            <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <input
                type="text"
                name="title"
                placeholder="Note title..."
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={saving}
              />
              <textarea
                name="content"
                placeholder="Write your note content here..."
                value={formData.content}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                disabled={saving}
              />
              <div className="flex gap-2">
                <button
                  onClick={editingId ? handleUpdate : handleCreate}
                  disabled={saving || !formData.title.trim() || !formData.content.trim()}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {saving ? (
                    <>
                      <Loader className="animate-spin" size={16} />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      {editingId ? 'Update' : 'Save'}
                    </>
                  )}
                </button>
                <button
                  onClick={handleCancel}
                  disabled={saving}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:bg-gray-400"
                >
                  <X size={16} />
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Add Note Button */}
          {!isCreating && !editingId && (
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mb-6"
            >
              <Plus size={16} />
              Add New Note
            </button>
          )}
        </div>

        {/* Notes List */}
        <div className="space-y-4">
          {notes.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-gray-500 text-lg mb-4">No notes yet. Create your first note!</p>
              {!isCreating && (
                <button
                  onClick={() => setIsCreating(true)}
                  className="flex items-center gap-2 mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus size={20} />
                  Create First Note
                </button>
              )}
            </div>
          ) : (
            notes.map((note) => (
              <div key={note.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 flex-1 mr-4">{note.title}</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(note)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      disabled={editingId === note.id || saving}
                      title="Edit note"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      disabled={saving}
                      title="Delete note"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 mb-3 whitespace-pre-wrap leading-relaxed">{note.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>Created: {formatDate(note.createdAt)}</span>
                  {note.updatedAt !== note.createdAt && (
                    <span>Updated: {formatDate(note.updatedAt)}</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Refresh Button */}
        <div className="mt-8 text-center">
          <button
            onClick={loadNotes}
            disabled={loading || saving}
            className="flex items-center gap-2 mx-auto px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:bg-gray-400"
          >
            <Loader className={loading ? "animate-spin" : ""} size={16} />
            Refresh Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;

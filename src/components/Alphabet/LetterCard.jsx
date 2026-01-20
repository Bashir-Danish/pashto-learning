export default function LetterCard({ letter, onClick, isUnique = false }) {
  return (
    <button
      onClick={onClick}
      className={`
        aspect-square rounded-xl flex flex-col items-center justify-center
        transition-all duration-200 hover:scale-105 hover:shadow-lg
        ${isUnique 
          ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-md' 
          : 'bg-white border border-slate-200 text-slate-800 hover:border-green-300'
        }
      `}
    >
      <span className={`text-3xl font-bold ${isUnique ? 'text-white' : 'text-slate-800'}`}>
        {letter.letter}
      </span>
      <span className={`text-xs mt-1 ${isUnique ? 'text-green-100' : 'text-slate-500'}`}>
        {letter.name}
      </span>
    </button>
  );
}

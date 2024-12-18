interface MovieCardProps {
  title: string;
  imageUrl: string;
  category: string;
  rating: number;
}

export default function MovieCard({ title, imageUrl, category, rating }: MovieCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[400px] object-cover transform transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 p-4 w-full">
          <span className="text-xs text-indigo-400 font-semibold">{category}</span>
          <h3 className="text-white font-bold mt-1">{title}</h3>
          <div className="flex items-center mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < rating ? 'text-yellow-400' : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
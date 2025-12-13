interface CategorySectionProps {
  title: string;
}

export default function CategorySection({ title }: CategorySectionProps) {
  return (
    <div className="mb-6">
      <h2 className="font-baskerville text-2xl font-bold pb-2 mb-4 border-b-2 border-black uppercase tracking-wide">
        {title}
      </h2>
    </div>
  );
}

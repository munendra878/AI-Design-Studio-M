import categories from "../data/categories";

export default function CategorySelector({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className="category-section">

      <div className="section-header">
        <h1 className="section-title">Select Design Category</h1>
      </div>

      <div className="category-grid">
        {categories.map((item) => (
          <div
            key={item.id}
            className={
              selectedCategory === item.value
                ? "category-card active"
                : "category-card"
            }
            onClick={() => setSelectedCategory(item.value)}
          >
            <div className="emoji">{item.icon}</div>

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

    </section>
  );
}
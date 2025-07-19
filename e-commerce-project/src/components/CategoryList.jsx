import { Link } from 'react-router-dom';
import { categories } from '../det';

function CategoryList() {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat.id}><Link to={`/category/${cat.id}`}>{cat.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}
export default CategoryList;
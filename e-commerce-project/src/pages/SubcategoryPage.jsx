import { useParams } from 'react-router-dom';
import { products } from '../det';
import ProductCard from '../components/ProductCard';

function SubcategoryPage() {
  const { id } = useParams();
  const list = products[id] || [];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {list.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default SubcategoryPage;
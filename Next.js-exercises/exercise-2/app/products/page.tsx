//1:Server Component Exercise


type Product = {
  id: number;
  title: string;
};

type ProductsResponse = {
  products: Product[];
};

const ProductPage = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data: ProductsResponse = await response.json();

  return (
    <div>
      <h1 className="font-bold text-red-600 text-3xl">Products</h1>

      <ul>
        {data.products.slice(0, 5).map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;

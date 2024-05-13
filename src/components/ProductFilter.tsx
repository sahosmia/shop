const ProductFilter = () => {
  return (
    <div>
      <h4>Filter</h4>

      <div className="flex space-x-2">
        <div className="flex-1 ">
          <label htmlFor="min">Min</label>
          <input type="number" id="min" className="w-full" />
        </div>
        <div className="flex-1 ">
          <label htmlFor="min">Max</label>
          <input type="number" id="max" className="w-full" />
        </div>
      </div>
    </div>
    
  );
};

export default ProductFilter;
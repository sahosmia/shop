import React from 'react';

type PriceFilterProps = {
  minPrice?: number;
  maxPrice?: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
};

const PriceFilter: React.FC<PriceFilterProps> = ({ minPrice, maxPrice, onMinPriceChange, onMaxPriceChange }) => (
  <div className="flex space-x-2">
    <div className="flex-1">
      <label htmlFor="min">Min</label>
      <input
        type="number"
        id="min"
        value={minPrice || ''}
        onChange={(e) => onMinPriceChange(parseInt(e.target.value))}
        className="w-full"
      />
    </div>
    <div className="flex-1">
      <label htmlFor="max">Max</label>
      <input
        type="number"
        id="max"
        value={maxPrice || ''}
        onChange={(e) => onMaxPriceChange(parseInt(e.target.value))}
        className="w-full"
      />
    </div>
  </div>
);

export default PriceFilter;

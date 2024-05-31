
const ProductDescription = ({description}:{description:string}) => {
  return (
    <div className="w-full lg:max-w-4xl">
      <p className="pb-5">{description}</p>
      <p>{description}</p>
    </div>
  )
}

export default ProductDescription
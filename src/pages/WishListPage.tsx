import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { WishListItemReduxType } from "../types";
import WishListItem from "../components/WishLists/WishListItem";


const WishListPage = () => {
  const wishLists = useSelector(
    (state: { wishLists: WishListItemReduxType[] }) => state.wishLists
  );
  return (
    <>
      <Helmet>
        <title>Wish Lists Page</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>

      <section className="py-20">
        <div className="container">
          {wishLists.length > 0 ? (
            <div className=" grid grid-cols-12 gap-5">
              <div className="col-span-9">
                <div className="divide-y border">
                  <div className="flex divide-x">
                    <div className="flex-1 p-2">Name</div>
                    <div className="flex-1 p-2">Price</div>
                    <div className="flex-1 p-2">Discount</div>
                    <div className="flex-1 p-2">Stock</div>
                    <div className="flex-1 p-2 flex justify-center">Action</div>
                  </div>
                  {wishLists.map((wishListItem) => (
                    <WishListItem
                      key={wishListItem.id}
                      wishListItem={wishListItem}
                    />
                  ))}
                </div>

            
                
              </div>
              
            </div>
          ) : (
            <div className="bg-red-200 w-full p-5 rounded ">
              <p>
                No Data here.{" "}
                <Link className="text-blue-400" to="/products">
                  Continue Shoping
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default WishListPage
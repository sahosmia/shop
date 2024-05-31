import { Helmet } from "react-helmet";
import WishListItem from "../components/WishLists/WishListItem";
import useAuth from "../hooks/useAuth";
import useWishLists from "../hooks/useWishLists";
import { useEffect, useState } from "react";
import { WishListItemReduxType } from "../types";
import EmptyWishList from "../components/WishLists/EmptyWishList";
import PageBanner from "../components/PageBanner";
import LoginMessage from "../components/tools/LoginMessage";

const WishListPage = () => {
  const wishLists = useWishLists();
  const auth = useAuth();
  const [userWishLists, setUserWishLists] = useState<WishListItemReduxType[]>(
    []
  );

  useEffect(() => {
    if (auth.user !== null) {
      setUserWishLists(
        wishLists.filter((item) => item.userId === auth?.user?.id)
      );
    }
  }, [auth, wishLists]);
  return (
    <>
      <Helmet>
        <title>Wish Lists Page</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      <PageBanner title="Wish List" />

      {/* <h2>{data}</h2> */}
      <section className="py-20">
        <div className="container">
          {auth.user !== null ? (
            userWishLists.length > 0 ? (
              <div className=" grid grid-cols-12 gap-5">
                <div className="col-span-9">
                  <div className="divide-y border">
                    <div className="flex divide-x">
                      <div className="flex-1 p-2">Name</div>
                      <div className="flex-1 p-2">Price</div>
                      <div className="flex-1 p-2">Discount</div>
                      <div className="flex-1 p-2">Stock</div>
                      <div className="flex-1 p-2 flex justify-center">
                        Action
                      </div>
                    </div>
                    {userWishLists.map((wishListItem) => (
                      <WishListItem
                        key={wishListItem.id}
                        wishListItem={wishListItem}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <EmptyWishList />
            )
          ) : (
            <LoginMessage />
          )}
        </div>
      </section>
    </>
  );
};

export default WishListPage;

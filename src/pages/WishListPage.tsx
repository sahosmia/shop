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
      const filteredUserWishList = wishLists.filter(
        (item) => item.userId === auth?.user?.id
      );
      setUserWishLists(filteredUserWishList);
    }
  }, [auth, wishLists]);
  return (
    <>
      <Helmet>
        <title>Wish Lists Page</title>
        <meta name="description" content="Anything will never seo." />
      </Helmet>
      <PageBanner title="Wish List" />

      <section className="py-20">
        <div className="container">
          {auth.user !== null ? (
            userWishLists.length > 0 ? (
              <div className=" grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <div className="divide-y border">
                    <div className="flex divide-x">
                      <div className="flex-1 p-2 text-sm font-semibold text-primary2">
                        Name
                      </div>
                      <div className="flex-1 p-2 text-sm font-semibold text-primary2 flex justify-center">
                        Price
                      </div>
                      <div className="flex-1 p-2 text-sm font-semibold text-primary2 flex justify-center">
                        Stock
                      </div>

                      <div className="flex-1 p-2 text-sm font-semibold text-primary2 flex justify-center">
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

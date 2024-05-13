import CustomerReviewsList from "./CustomerReviewsList";

const reviews = [
    {
        "rating": 4.5,
        "heading": "Excellent Service",
        "description": "The customer support was outstanding. They resolved my issue in minutes!",
        "customer_name": "John Doe",
        "date": "2023-10-15"
      },
      {
        "rating": 5.0,
        "heading": "Amazing Product Quality",
        "description": "The product exceeded my expectations. Will definitely buy again!",
        "customer_name": "Jane Smith",
        "date": "2023-09-23"
      },
      {
        "rating": 4.0,
        "heading": "Quick Delivery",
        "description": "My order arrived ahead of schedule, and the packaging was great.",
        "customer_name": "Michael Johnson",
        "date": "2023-11-01"
      },
      {
        "rating": 4.8,
        "heading": "Best Purchase Ever",
        "description": "This is the best thing I've bought in a long time. Highly recommend!",
        "customer_name": "Emily Brown",
        "date": "2023-08-29"
      },
      {
        "rating": 3.5,
        "heading": "Good Value for Money",
        "description": "The product was decent for its price. Could be better, but overall satisfied.",
        "customer_name": "Chris Lee",
        "date": "2023-09-15"
      },
      {
        "rating": 4.3,
        "heading": "Great Customer Experience",
        "description": "The team was friendly and very helpful with all my questions.",
        "customer_name": "Maria Davis",
        "date": "2023-07-30"
      },
      {
        "rating": 4.7,
        "heading": "Top-Notch Quality",
        "description": "The quality of the product is superb, and it performs well.",
        "customer_name": "Robert Wilson",
        "date": "2023-10-05"
      },
      {
        "rating": 4.2,
        "heading": "Satisfied with My Purchase",
        "description": "I got what I paid for. It meets my expectations.",
        "customer_name": "Linda Johnson",
        "date": "2023-08-20"
      },
      {
        "rating": 5.0,
        "heading": "Highly Recommend!",
        "description": "One of the best products I've used. Would buy again without hesitation.",
        "customer_name": "David Martinez",
        "date": "2023-09-10"
      },
      {
        "rating": 3.8,
        "heading": "Overall Good Experience",
        "description": "The product is decent, but there were some minor issues.",
        "customer_name": "Laura Anderson",
        "date": "2023-07-15"
      }
    
];

const CustomerReview = () => {
  return (
    <div className=" md:py-20 py-10 bg-slate-200">
      <div className="container">
        <div className="text-center text-4xl font-bold ">
          What People Are Saying
        </div>
              <div className="md:mt-40 mt-6 ">
                  <CustomerReviewsList reviews={ reviews} />
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;

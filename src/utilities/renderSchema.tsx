import RATINGS from "../utilities/RATINGS";
import { dateFormatter } from "../utilities/dateFormatter";
import { ReviewAPIData } from "../utilities/types";

export default function renderSchema(data: ReviewAPIData) {
  let reviewsSchema = document.createElement("script");
  reviewsSchema.type = "application/ld+json";

  let reviewsSchemaArray = data.reviews.map((review: any) => {
    return {
      "@type": "Review",
      datePublished: dateFormatter(review.createdAt),
      reviewBody: review.comment,
      reviewRating: {
        "@type": "Rating",
        bestRating: "5",
        ratingValue: RATINGS[review.rating as keyof typeof RATINGS],
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: review.reviewer.name,
      },
    };
  });

  let productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.organisationName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: data.averageRating,
      reviewCount: data.totalReviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    review: reviewsSchemaArray,
  };

  reviewsSchema.text = JSON.stringify(productSchema);

  document.querySelector("body")!.appendChild(reviewsSchema);
}

import {useState} from "react";
import {BodyStyleType, ReviewType} from "../types";
import {getCarReviewsByBodyStyleService} from "../services";

const useLoadReviews = () => {
    const [reviewsLoading, setReviewsLoading] = useState<boolean>(false);

    const getReviewsByBodyStyle = async (bodyStyle: BodyStyleType): Promise<ReviewType[]> => {
        try {
            setReviewsLoading(true);
            const reviews: ReviewType[] = await getCarReviewsByBodyStyleService(bodyStyle);

            setReviewsLoading(false)
            return reviews;
        } catch (err) {
            setReviewsLoading(false)
            throw err;
        }
    }

    return {
        reviewsLoading,
        getReviewsByBodyStyle
    }
}

export default useLoadReviews;
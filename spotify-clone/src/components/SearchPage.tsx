import { useParams } from "react-router-dom"
import AlbumSection from "./AlbumSection"



const SearchPage = () => {

    const URLParams = useParams();

    return (
        <>
            {
                URLParams.searchString && <AlbumSection cardNumber={100} searchWord={URLParams.searchString} />

            }
        </>
    );
};

export default SearchPage;
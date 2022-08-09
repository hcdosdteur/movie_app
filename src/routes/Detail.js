import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	const [loading, setLoading] = useState(true);
	const [detailData, setDetailData] = useState("");
	const { id } = useParams();
	const getMovie = async () => {
		const json = await (
			await fetch(`https:yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setLoading(false);
		console.log(json);
		setDetailData(json.data.movie.title);
	};
	useEffect(() => {
		getMovie();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h1>
						Detail of <i>{detailData}</i>
					</h1>
					<div>plz check the console</div>
				</div>
			)}
		</div>
	);
}

export default Detail;

import './SearchCard.css';

export default function SearchCard({ info }) {
  //   const bookPage = async (isbn) => {
  //     const response = await fetch(``);
  //     const json = await response.json();
  //     console.log(json);
  //   };

    return (
        <div className='search-card-inner'>
        <p className='title'>{ info.title }</p>
        <p className='author'>{ info.author_name}</p>
        <button>More</button>
      </div>
    )
}
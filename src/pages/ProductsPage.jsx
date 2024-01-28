import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import FilterArea from '../Components/FilterArea'
import { useSearchParams } from 'react-router-dom'

const ProductsPage = () => {
  const [books, setBooks] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()

  const order = searchParams.get('sırala')
  const query = searchParams.get('arama terimi')

  const options = {
    params: {
      _sort: order === 'z-a' ? '-title' : 'title',
      q: query, 
    }
  }


  useEffect(() => {
    axios
      .get('http://localhost:3000/books', options)
      .then(res => setBooks(res.data))
      .catch(err => console.log(err))
  }, [order, query]);

  return (
    <div className='mx-5 mt-4 h-100'>
      <h3>{books?.length} Kitap Bulundu</h3>
      <FilterArea />

      <div className="card-container">
        {books?.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage

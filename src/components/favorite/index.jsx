import { Container } from './styles'
import { AiFillHeart } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { useState, useEffect } from "react"
import { api } from "../../services/api"

export function Favorite({professional_id}) {
  
  const [favorite, setFavorite] = useState()

  useEffect(() => {
    async function Favorite() {
      const response = await api.get(`/favorites/${professional_id}`)
      if (response.data.favorites.length === 0) {
        setFavorite(false)
      } else {
        setFavorite(true)
      }
    }
    Favorite()
  }, [])
 
  async function handleFavorite() {
    if (favorite == true) {
      setFavorite(false)
      await api.delete(`/favorites/${professional_id}`)
    } else {
      setFavorite(true)
      await api.post("/favorites", { professional_id })
    }
  }
  return (
    <Container>
      <div className="favorite" onClick={handleFavorite}>
        {!favorite ? <AiOutlineHeart /> : <AiFillHeart />}
      </div>
    </Container>
  )
}
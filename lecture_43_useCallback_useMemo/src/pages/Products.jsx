import { useFetch } from "../hooks/useFetch";
import { useTheme } from "../hooks/useTheme";

export default function ProductsPage() {

  const { data, error, isFetching } = useFetch('https://dummyjson.com/products');

  const { theme, toggleTheme } = useTheme();

  return (
    <div className='page'>
      <h2>Demo Page for Products</h2>
      <p>Now use {theme} theme</p>
      <button onClick={toggleTheme}>ToggleTheme</button>
      { isFetching && <p>Please wait!</p> }
      { data.products && data.products.map( prod => <p key={prod.id}>{prod.title}</p>) }
      { !!error && <p>{error} </p>}
    </div>
  )
}

/**
 * В приложении возможны 2 темы, light, dark.
 * Написать свой кастомный хук useTheme, который будет отвечать за работу с темой приложения. Он должен выставлять "наружу" значение темы, и инструмент для переключения этой темы. При изменении темы, нам нужно ее сохранять в localStorage. При этом, начальным значением темы должно быть ИЛИ значение из ЛС, или light, если такого значения нет.
 */
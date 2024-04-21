import { styles } from "./App.styles"
import logo from './assets/Logo.svg'
import {RestaurantNavigation} from './Restaurant_navigation/RestaurantNavigation'

export const App = () => {

  return (
    <main className={styles.mainBackground}>
      <RestaurantNavigation />
      <img src={logo} alt="Nazwa Restauracji" className={styles.restaurantlogo}/>
      <article>
      Tuż przy krakowskich plantach, krok od Małego Rynku i Bazyliki Mariackiej
      powstał Apollo – restauracja, w której sztuka kulinarna polskiej kuchni ukazana jest w innym wymiarze. Tutaj gdzie we wnętrzach pełno haftowanych krakowskich obwarzanków, gdzie malowane kurki złotopiórki znoszą złote jaja, a imponująca winiarnia połączona z cudownym ogrodem obfituje w wina z najlepszych winnic świata, można kosztować tradycyjnych polskich potraw w nowych,
      niespotykanych aranżacjach.
      </article>
    </main>
  )
}



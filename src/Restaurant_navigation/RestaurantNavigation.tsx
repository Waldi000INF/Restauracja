import { List, ListItem } from "@mui/material"
import { pages } from "./pages"

export const RestaurantNavigation = (): JSX.Element => {
        return (
            <header>
                <List>
                    {pages.map((page, index) => (
                        <ListItem disablePadding>
                            <div key={index}>{page.name}</div>
                        </ListItem>
                    ))}
                </List>
            </header>
        )
}
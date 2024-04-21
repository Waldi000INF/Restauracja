import { css } from '@emotion/css';
import backgroundImg from './assets/restaurant_background.jpg';

export const styles = {
    mainBackground: css({
        height: '100vh',
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }),

    restaurantlogo: css({
        width: '25%',
    })
}

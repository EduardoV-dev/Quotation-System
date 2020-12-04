export const getYearsDiff = year => new Date().getFullYear() - year;

export const getBrandPrice = (brand, base) => {
    let percentage = 0;
    switch (brand) {
        case 'Americano':
            percentage = 1.15;
            break;
        case 'Europeo':
            percentage = 1.30;
            break;
        case 'Asiatico':
            percentage = 1.05;
            break;
        default:
            break;
    }
    return percentage * base;
}

export const getPlanPrice = (plan, base) => plan === 'basico' ? base * 1.2 : base * 1.5;
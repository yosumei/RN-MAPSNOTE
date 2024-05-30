import { Colors } from "../theme/colors"

const setColors=(index)=>{
    switch (index %10) {
        case 0:
            return Colors.GREEN; case 1:
            return Colors.BLUE; case 2:
            return Colors.RED; case 3:
            return Colors.PURPLE; case 4:
            return Colors.ORANGE; case 5:
            return Colors.YELLOW; case 6:

    
        default:return Colors.ORANGE
    }
}

export  {setColors}
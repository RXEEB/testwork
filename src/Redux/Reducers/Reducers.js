// import { ADD_COLOR, UPDATE_COLOR, DELETE_COLOR } from './actions';
// import { color } from './states';


// export let reducer = (state = color, action) => {
//     let newColor;
//     switch (action.type) {
//         case ADD_COLOR:
//             newColor = [...state];
//             newColor.push(action.payload);
//             return newColor;
//         case DELETE_COLOR:
//             newColor = [...state];
//             newColor = newColor.filter(Color => Color.id != action.payload);
//             return newColor;
//         case UPDATE_COLOR:
//             newColor = [...state];
//             let index = -1;
//             for (let i = 0; i < newColor.length; i++) {
//                 index++;
//                 if (newColor[i].id == action.payload.id) {
//                     break;
//                 }

//             }
//             if (index != -1) {
//                 newColor[index] = action.payload;
//                 return newColor;
//             }

//     }
//     return state;
// }
export const ADD_COLOR = "ADD_COLOR";
export const DELETE_COLOR = "DELETE_TODO";
export const UPDATE_COLOR = "UPDATE_COLOR";

export function addColor(color) {
    return {
        type:ADD_COLOR,
        payload: color,
    }
}

export function deleteColor(colorId) {
    return {
        type:DELETE_COLOR,
        payload: colorId,
    }
}


export function updateColor(color) {
    return {
        type:UPDATE_COLOR,
        payload: color,
    }
}
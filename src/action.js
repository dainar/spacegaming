import $ from 'jquery';

export const getCupones = ( callback) => {
    return dispatch => {
        
        $.ajax({
            url: 'https://demo7436761.mockable.io/cupons',
            method: "GET",
            contentType: "application/json",
            dataType: "JSON",
            success: (cupones) => {
                 dispatch({"type": "SET_CUPONES", "cupones": cupones.cupons});
                //console.log(ediciones);
                console.log(cupones.cupons);
                 callback();
            },
            error: (error) => {
               console.log(error);
                
                 callback(error);
            }
        });
    }
}
//Challenge: Multi-Step Form with useReducer

// **Scenario**

// You want to build a **multi-step registration form** (e.g., collecting user profile details, contact info, and confirmation). Managing the form state can get tricky with multiple fields across different steps. Using `useReducer` can help centralize and streamline this logic.

import { useReducer } from "react";

const initialState = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state, [action.field]: action.value
            };
        case 'NEXT_STEP':
            return {
                ...state, step: state.step < 3 ? state.step + 1 : state.step
            };
        case 'PREV_STEP':
            return {
                ...state, step: state.step > 1 ? state.step -1 : state.step
            };
        case 'RESET_FORM':
            return initialState;
           default:
            return state;     
               
    }
}

const MultiStepForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleNext = ()=> {
        dispatch({type: 'NEXT_STEP'})
    };

    const handleBack = () => {
        dispatch({type: 'PREV_STEP'})
    };

    const handleConfirm = ()=> {
        dispatch({type: 'RESET_FORM'})
        alert('Form submited successfully!')
    }

    return(
        <div>
            <h1>Multi-Step Registration Form</h1>
                        
                {/* step 1 */}
                {state.step === 1 && (
                    <div>
                         <h2>Step 1 : Profile</h2>
                           <label>First Name:
                            <input type="text" 
                                value={state.firstName}
                                onChange={(e)=> dispatch({
                                type:'UPDATE_FIELD', 
                                field: 'firstName', 
                                value: e.target.value
                        })}
                        /> </label> <br />

                            <label>Last Name:
                            <input type="text" 
                                value={state.lastName}
                                onChange={(e)=> dispatch({
                                type:'UPDATE_FIELD', field:'lastName', value: e.target.value
                            })}
                            /> </label> <br />

                            <button onClick={handleNext} >Next</button>

                     </div>
            )}
        
                    {/* step 2 */}
                    
                 {state.step === 2 && (
                    <div>
                        <h2>Step 2 : Contact</h2>

                            <label>Email:
                            <input type="email"
                                value={state.email}
                                onChange={(e)=> dispatch({
                                type: 'UPDATE_FIELD',
                                field: 'email',
                                value: e.target.value
                            })}
                            /> </label> <br />

                            <label>Phone:
                            <input type="tel"
                                value={state.phone}
                                onChange={(e)=> dispatch({
                                type: 'UPDATE_FIELD',
                                field: 'phone',
                                value: e.target.value
                            })}
                            /> </label> <br />

                            <button onClick={handleNext}>Next</button> <br />
                            <button onClick={handleBack}>Back</button>
                    </div>
                    )}
                 
                        {/* step 3 */}
                      {state.step === 3 && (
                        <div>
                            <h2>Step 3 : Review </h2>
                    
                                <p> <strong>First Name:</strong> {state.firstName}</p>
                                <p> <strong>Last Name:</strong>{state.lastName} </p>
                                <p> <strong>Email:</strong>{state.email}</p>
                                <p> <strong>Phone:</strong>{state.phone}</p>

                                <button onClick={handleBack} >Back</button>
                                <button onClick={handleConfirm}>Confirm</button>
                        </div>
                    )}

                        
        </div>
    )
}
export default MultiStepForm;

// COMMENTS

// [action.field]: action.value= Burada hangi input değiştiyse onu güncelliyoruz.

// state.step < 3
//     ? state.step + 1
//     : state.step= Bir sonraki adıma geçiyor ama 3'ü geçmesine izin vermiyor.

// state.step > 1
//     ? state.step - 1
//     : state.step = Bir önceki adıma dönüyor ama 1'in altına düşmesine izin vermiyor.

// const [state, dispatch] = useReducer(reducer, initialState);= state → mevcut form bilgilerini tutuyor.
// dispatch → reducer'a "şu işlemi yap" dememizi sağlıyor.
// reducer → state'in nasıl değişeceğini belirliyor.
// initialState → başlangıç state'i.

// step === 1  Profile ekranı gösteriliyor

 export const initialState = [];

 export const reducer = (state, action)=> {
    switch(action.type){
        case 'add' :
            // yeni contact ekle
            return [...state, action.payload];

        case 'edit' :
            // ilgili contact'ı değiştir
            return state.map((contact)=> 
            contact.id === action.payload.id ? action.payload : contact);

        case 'delete' :
            // ilgili contact'ı filter ile çıkar
            return state.filter((contact)=> contact.id !== action.payload);

        case 'toggleFavorite' :
            // ilgili contact'ın favorite değerini tersine çevir
            return state.map((contact)=> contact.id === action.payload ? {...contact, favorite : !contact.favorite} : contact);
           default:
            return state;          
    
     }
}

// Comments
// Reducer'ın görevi butona basmak değil, state'in nasıl değişeceğine karar vermek

// reducer(state, action) yani
// state → mevcut contact listesi
// action → yapılmasını istediğimiz işlem

// case 'edit'= Bütün contact'ları geziyoruz.

// ID eşleşiyorsa eski contact yerine yeni contact geliyor.

// Eşleşmiyorsa eski contact aynen kalıyor

// case 'delete' = Silmek istediğimiz contact'ın ID'si dışındaki contact'ları tutuyoruz.

// case 'favaorite' = ID eşleşen contact'ın favorite değerini tersine çeviriyoruz:
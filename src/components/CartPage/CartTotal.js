import React from 'react'
import { ProductConsumer } from '../../context/context';
export default function CartTotal() {
    return (
        <ProductConsumer>
            {value => {
                const { Total, deletItem } = value;
                return (
                    <div className='text-center'>
                        {Total === 0 ?

                            (<>
                            
                                <h1 className="text-center text-uppercase"> Try to choose a product your list its empty</h1>
                            <h3>${Total}</h3>
                            <button type="button" onClick={e => deletItem(e)} className="btn btn-outline-danger text-center">Clear all</button>
                            </>)
                   
                    :
                            (<>
                                <h3>${Total}</h3>
                            <button type="button" onClick={e => deletItem(e)} className="btn btn-outline-danger text-center">Clear all</button>
                             </>) }
                    </div>



                )

            }}
        </ProductConsumer>
    )
}

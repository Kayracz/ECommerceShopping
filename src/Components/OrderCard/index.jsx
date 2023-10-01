import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = (props) => {
    const { id, title, imageUrl, price, handleDelete, quantity } = props;
    
    return (
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                    <figure className="w-20 h-20">
                        <img
                            className="w-full h-full rounded-lg object-cover"
                            src={imageUrl}
                            alt={title}
                        />
                    </figure>
                    <p className="text-sm font-light line-clamp-1">{title}</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-m font-medium">{price}</p>
                    {quantity}
                    {handleDelete? 
                     <XMarkIcon
                        onClick={() => handleDelete(id)}
                        className="h-6 w-6 text-black cursor-pointer"
                    ></XMarkIcon> : null}

                </div>
            </div>
        )
};

export default OrderCard;
  
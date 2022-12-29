import React from "react";

const CommentCard = (props) => {
  return (
    <div className="px-6">
      <p className="py-2 text-6xl text-orange-500">"</p>
      <div className="rating mb-6">
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
        <input type="radio" name="rating-1" className="mask mask-star bg-yellow-500" />
      </div>
      <p className="mb-16 text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
        accusamus quaerat provident inventore.
      </p>
      <p className="mt-6 text-3xl text-orange-500 font-bold">{props.auth}</p>
    </div>
  );
};

export default CommentCard;

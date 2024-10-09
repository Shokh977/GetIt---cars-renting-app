import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDealer } from "../store/dealerSlice";
import { Button } from "../UI/Button";
import { CarCard } from "../UI/carCard";
import "./dealerDetails.css";
import img from "../assets/dealer.jpg";
import { Rating } from './../UI/Rating';

const p =
  "It is very affordable and weel -driven good continional cars provides with 5 yeas of experience. You can contact me anytime and i will provide detailed info about the car you want to owe :)";

export const DealerDetails = () => {
  const params = useParams();

  const cut = (txt, num) => {
    if (txt.length > num) {
      return txt.slice(0, num) + "...";
    } else {
      return txt;
    }
  };

  const dispatch = useDispatch();
  const dealer = useSelector((state) => state.dealer.dealerData);
  console.log(dealer, "dealer details");

  useEffect(() => {
    if (params.id) {
      dispatch(fetchDealer(params.id));
    }
  }, [dispatch, params.id]);

  const selectedDealer = dealer.find(
    (item) => item.id === parseInt(params.id, 10)
  );

  return (
    <div className="container dealar-details">
      {selectedDealer && (
        <>
          <div className="dealer-box">
            <div className="dealer-img">
              <img src={img} alt="" />
              <h2>{selectedDealer.name}</h2>
              <Rating/>
              <Button>Contact</Button>
            </div>
            <div className="dealer-about">
              <ul>
                <li>
                  <h2>Followers</h2>
                  <h2>24</h2>
                </li>
                <li>
                  <h2>Posts</h2>
                  <h2>4</h2>
                </li>
                <li>
                  <h2>About</h2>
                  <p>{cut(p, 70)}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="posts">
            <h1 className="post-title">Posts</h1>
            {/* filted  */}
            <CarCard />
          </div>
          <div className="feedback">
            <h1>Feedbacks</h1>
            <div className="feedback-box">
              <ul>
                <li>
                  <div className="post-img">
                    <img src={img} alt="" />
                    <h3>{selectedDealer.name}</h3>
                  </div>

                  <p>
                    I am the best dealer and provide you with effordable prices
                  </p>
                </li>
              </ul>

              <ul>
                <li>
                  <div className="post-img">
                    <img src={img} alt="" />
                    <h3>{selectedDealer.name}</h3>
                  </div>

                  <p>
                    I am the best dealer and provide you with effordable prices
                    I am the best dealer and provide you with effordable prices
                  </p>
                </li>
              </ul>

              <ul>
                <li>
                  <div className="post-img">
                    <img src={img} alt="" />
                    <h3>{selectedDealer.name}</h3>
                  </div>

                  <p>
                    I am the best dealer and provide you with effordable prices
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

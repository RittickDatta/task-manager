import React, { useState } from "react";
import "./HomePage.scss";
import { IoMdCheckboxOutline } from "react-icons/io";
import Modal from "../../shared/components/Modal/Modal";
import Task from "../../components/Task/Task";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="home-page">
      <div className="content container home-page-container">
        <div className="intro">
          <div className="headline">Welcome to Task Center</div>
          <div className="sub-heading">
            Get Things Done.{" "}
            <span className="keyword">
              now <IoMdCheckboxOutline />
            </span>
          </div>
        </div>
        <div className="add-task">
          <button className="add-task-btn" onClick={handleModal}>
            Add Task
          </button>
        </div>
        {isModalOpen && (
          <Modal
            onCancel={handleModal}
            onConfirm={handleModal}
            modalHeader={"Add Task"}
          >
            <Task />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default HomePage;

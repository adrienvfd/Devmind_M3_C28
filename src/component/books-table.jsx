import React, { useState } from "react";
import "./books-table.css";
import Modal from "@mui/material/Modal";

const BooksTable = ({ books }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBookImage, setSelectedBookImage] = useState("");

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Genre</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.genre}</td>
                        <td>{book.description}</td>
                        <td
                            data-book-image
                            onClick={() => {
                                setIsModalOpen(true);
                                setSelectedBookImage(book.image);
                            }}
                        >
                            View image
                        </td>
                    </tr>
                ))}
            </tbody>
            <Modal
                className="book-image-modal"
                aria-labelledby="book-image-modal-title"
                aria-describedby="book-image-modal-description"
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <img
                    src={selectedBookImage}
                    alt="Book image"
                    className="modal-content"
                />
            </Modal>
        </table>
    );
};

export default BooksTable;

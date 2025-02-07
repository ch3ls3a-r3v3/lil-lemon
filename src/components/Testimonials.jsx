import React from 'react';
import './styles.css';

const testimonialsData = [
    { id: 1, name: 'John Doe', review: 'Amazing food and great service!' },
    { id: 2, name: 'Jane Smith', review: 'Best Mediterranean restaurant in town.' },
    { id: 3, name: 'Michael Brown', review: 'Loved the ambiance and the dishes were delicious.' }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <h2>Testimonials</h2>
            <div className="testimonial-grid">
                {testimonialsData.map(testimonial => (
                    <div key={testimonial.id} className="testimonial-item">
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.review}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
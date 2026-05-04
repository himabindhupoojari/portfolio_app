import { useState } from "react";
import './Contact.scss';
import toast from "react-hot-toast";
import Loader from "@components/loader/Loader";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    message?: string;
}

function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<Errors>({});

    const validate = () => {
        const newErrors: Errors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        return newErrors;
    };

    // const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    // ) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //     setErrors({});               
    // };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // ✅ Remove only that field's error
        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("all fields require");
            return;
        }

        try {
            setLoading(true);
            // 👉 Replace with your Render API
            const res = await fetch(
                "https://portfolio-app-12ww.onrender.com/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!res.ok) throw new Error("Failed to send");

            toast.success("🚀 Got your message! I’ll get back to you shortly.");
            setLoading(false);
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            setLoading(false);
            console.log(err);
            toast.error("Something went wrong. Try again.");
        }
    };

    return (
        <>
            {loading ? <Loader /> : <div className="contact">
                <h2>Let’s Build Something Together 🚀</h2>
                <h3>I’m always open to discussing new opportunities, freelance work, or collaborations. Feel free to reach out!</h3>
                <form onSubmit={handleSubmit} className="contact__form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Tell me about your project or query..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {errors.message && <span className="error">{errors.message}</span>}
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>}
        </>
    );
}

export default Contact;
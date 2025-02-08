import { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Validación básica de los campos
    if (!formData.name || !formData.email || !formData.message) {
      MySwal.fire({
        icon: 'error',
        title: 'Todos los campos son obligatorios',
        text: 'Por favor, completa todos los campos antes de enviar.',
        background: '#1f1f1f',
        confirmButtonColor: '#e74c3c',
        color: '#ffffff',
        customClass: {
          popup: 'rounded-xl',
        },
      });
      setStatus('idle');
      return;
    }

    // Validación del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      MySwal.fire({
        icon: 'error',
        title: 'Email no válido',
        text: 'Por favor, ingresa un email válido.',
        background: '#1f1f1f',
        confirmButtonColor: '#e74c3c',
        color: '#ffffff',
        customClass: {
          popup: 'rounded-xl',
        },
      });
      setStatus('idle');
      return;
    }

    // Si todo es válido, envía el mensaje
    try {
      await addDoc(collection(db, 'mensajes'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      MySwal.fire({
        icon: 'success',
        title: '¡Gracias por tu mensaje!',
        text: 'En breve te responderé.',
        background: '#1f1f1f',
        confirmButtonColor: '#8e44ad',
        color: '#ffffff',
        customClass: {
          popup: 'rounded-xl',
        },
      }).then(() => {
        // Resetear el formulario
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setStatus('success');
      });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error al enviar tu mensaje. Inténtalo nuevamente.',
        background: '#1f1f1f',
        confirmButtonColor: '#e74c3c',
        color: '#ffffff',
        customClass: {
          popup: 'rounded-xl',
        },
      });
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-12 text-white relative animate-fade-in-up"
      style={{
        background:
          'linear-gradient(180deg, rgba(128,0,128,0.6), rgba(0, 0, 0, 0.6))',
        backgroundSize: '200% 200%',
        animation: 'gradientMove 15s ease infinite',
        marginTop: '-10px',
        marginBottom: '-20px',
      }}
    >
      {/* Fondo degradado violeta */}
      <div className="absolute inset-0 z-[-1]">
        <div
          className="h-full w-full"
          style={{
            background:
              'linear-gradient(180deg, rgba(128,0,128,0.7), transparent)',
            filter: 'blur(50px)',
            opacity: 0.9,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 animate-fade-in">
          Contáctame
        </h2>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-3 md:top-4 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu Nombre"
              className={`
                w-full pl-10 py-2 md:py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300
                ${status === 'error' ? 'border-red-500' : 'border-gray-300'}
              `}
              required
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 md:top-4 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu Email"
              className={`
                w-full pl-10 py-2 md:py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300
                ${status === 'error' ? 'border-red-500' : 'border-gray-300'}
              `}
              required
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tu Mensaje"
              className={`
                w-full pl-4 pr-4 py-2 md:py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none
                ${status === 'error' ? 'border-red-500' : 'border-gray-300'}
              `}
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`
              w-full py-3 rounded-lg transition-all duration-300
              ${status === 'loading' 
                ? 'bg-gray-500 cursor-wait' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
              }
            `}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  {/* ... SVG del spinner ... */}
                </svg>
                Enviando...
              </span>
            ) : (
              'Enviar Mensaje'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

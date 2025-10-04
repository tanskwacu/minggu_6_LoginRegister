import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Calendar, Phone } from 'lucide-react';
import styles from './RegistrationForm.module.css';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: '',
    phone: '',
    agree: false
  });

  const getPasswordStrength = (password) => {
    if (password.length === 0) return { text: '', class: '' };
    if (password.length < 6) return { text: 'Lemah', class: 'weak' };
    if (password.length < 10) return { text: 'Sedang', class: 'medium' };
    return { text: 'Kuat', class: 'strong' };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (registerData.password !== registerData.confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    
    if (!registerData.agree) {
      alert('Anda harus menyetujui syarat dan ketentuan');
      return;
    }

    console.log('Register data:', registerData);
    // Add your registration logic here
  };

  const strength = getPasswordStrength(registerData.password);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Buat Akun Baru 🚀</h2>
            <p className={styles.subtitle}>
              Bergabunglah dengan komunitas kami hari ini
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Nama Depan <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter your first name"
                    value={registerData.firstName}
                    onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                    required
                  />
                  <User className={styles.inputIcon} size={20} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Nama Belakang <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Enter your last name"
                    value={registerData.lastName}
                    onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                    required
                  />
                  <User className={styles.inputIcon} size={20} />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Alamat Email <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="your.email@example.com"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                  required
                />
                <Mail className={styles.inputIcon} size={20} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Password <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                  placeholder="Create a strong password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  required
                />
                <Lock className={styles.inputIcon} size={20} />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.togglePassword}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {strength.text && (
                <div className={styles.passwordStrength}>
                  <div className={styles.strengthBar}>
                    <div className={`${styles.strengthFill} ${styles[strength.class]}`}></div>
                  </div>
                  <span className={`${styles.strengthText} ${styles[strength.class]}`}>
                    Kekuatan password: {strength.text}
                  </span>
                </div>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Konfirmasi Password <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={styles.input}
                  placeholder="Confirm your password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  required
                />
                <Lock className={styles.inputIcon} size={20} />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={styles.togglePassword}
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Gender <span className={styles.required}>*</span>
                </label>
                <select
                  className={styles.select}
                  value={registerData.gender}
                  onChange={(e) => setRegisterData({...registerData, gender: e.target.value})}
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Laki-laki</option>
                  <option value="female">Perempuan</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Tanggal Lahir <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="date"
                    className={styles.input}
                    value={registerData.dob}
                    onChange={(e) => setRegisterData({...registerData, dob: e.target.value})}
                    required
                  />
                  <Calendar className={styles.inputIcon} size={20} />
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>
                Nomor Telepon <span className={styles.required}>*</span>
              </label>
              <div className={styles.inputWrapper}>
                <input
                  type="tel"
                  className={styles.input}
                  placeholder="+62 123 4567 8900"
                  value={registerData.phone}
                  onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                  required
                />
                <Phone className={styles.inputIcon} size={20} />
              </div>
            </div>

            <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="agree"
                className={styles.checkbox}
                checked={registerData.agree}
                onChange={(e) => setRegisterData({...registerData, agree: e.target.checked})}
                required
              />
              <label htmlFor="agree" className={styles.checkboxLabel}>
                Saya setuju dengan{' '}
                <a href="#">Terms and Conditions</a>
                {' '}dan{' '}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Buat Akun
            </button>
          </form>

          <div className={styles.footer}>
            Sudah punya akun? <a href="/login">Login sekarang</a>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";

const styles = {
  app: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #59AC77 0%, #3A6F43 25%, #FDAAAA 75%, #FFD5D5 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    fontFamily: "'Segoe UI', sans-serif",
    overflow: "auto",
    margin: 0
  },
  card: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    padding: "2.5rem",
    maxWidth: "500px",
    width: "100%",
    margin: "0 auto"
  },
  title: {
    textAlign: "center",
    background: "linear-gradient(135deg, #3A6F43 0%, #FDAAAA 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
    fontWeight: "800"
  },
  subtitle: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "2rem",
    fontSize: "1rem"
  },
  formGroup: {
    marginBottom: "1.2rem"
  },
  label: {
    display: "block",
    fontWeight: "600",
    background: "linear-gradient(135deg, #3A6F43 0%, #59AC77 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "0.9rem",
    marginBottom: "0.5rem"
  },
  input: {
    width: "100%",
    padding: "1rem",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    fontSize: "1rem",
    background: "white",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
  },
  inputFocus: {
    borderColor: "#59AC77",
    boxShadow: "0 0 0 3px rgba(89, 172, 119, 0.2)"
  },
  inputError: {
    borderColor: "#ef4444",
    background: "#fef2f2"
  },
  select: {
    width: "100%",
    padding: "1rem",
    border: "2px solid #e5e7eb",
    borderRadius: "12px",
    fontSize: "1rem",
    background: "white",
    cursor: "pointer",
    boxSizing: "border-box",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
  },
  errorMsg: {
    color: "#ef4444",
    fontSize: "0.8rem",
    marginTop: "0.3rem",
    display: "block"
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    marginBottom: "1.2rem"
  },
  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1.2rem",
    cursor: "pointer"
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
    accentColor: "#59AC77"
  },
  submitButton: {
    width: "100%",
    padding: "1.2rem",
    background: "linear-gradient(135deg, #59AC77 0%, #3A6F43 100%)",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 25px rgba(89, 172, 119, 0.4)",
    textTransform: "uppercase",
    letterSpacing: "1px"
  },
  linkText: {
    textAlign: "center",
    marginTop: "1.5rem",
    fontSize: "0.95rem",
    color: "#6b7280"
  },
  link: {
    background: "linear-gradient(135deg, #3A6F43 0%, #59AC77 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "700"
  },
  optionsRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem"
  },
  forgotLink: {
    fontSize: "14px",
    background: "linear-gradient(135deg, #3A6F43 0%, #59AC77 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textDecoration: "none",
    cursor: "pointer",
    fontWeight: "600"
  },
  successMessage: {
    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    color: "white",
    padding: "2rem",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)"
  },
  strengthBar: {
    height: "6px",
    borderRadius: "3px",
    transition: "all 0.3s ease"
  }
};

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutTimer, setLockoutTimer] = useState(0);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false
  });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    phone: "",
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Simulasi login gagal (ganti dengan validasi real di production)
    const isLoginSuccessful = loginData.email === "user@example.com" && loginData.password === "password123";
    
    if (isLoginSuccessful) {
      console.log("Login data:", loginData);
      alert("Login berhasil!");
      setLoginAttempts(0);
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        setIsLocked(true);
        setLockoutTimer(20);
        alert("Terlalu banyak percobaan gagal! Akun terkunci selama 20 detik.");
      } else {
        alert(`Login gagal! Sisa percobaan: ${3 - newAttempts}`);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    if (touched[name]) {
      const fieldError = validateField(name, type === "checkbox" ? checked : value);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));

    const fieldError = validateField(name, type === "checkbox" ? checked : value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        if (!value.trim()) return "First name is required";
        if (value.length < 2) return "First name must be at least 2 characters";
        return "";
      case "lastName":
        if (!value.trim()) return "Last name is required";
        if (value.length < 2) return "Last name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email address";
        return "";
      case "password":
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          return "Password must contain uppercase, lowercase, and numbers";
        }
        return "";
      case "confirmPassword":
        if (!value) return "Please confirm your password";
        if (value !== formData.password) return "Passwords do not match";
        return "";
      case "gender":
        if (!value) return "Please select your gender";
        return "";
      case "dateOfBirth":
        if (!value) return "Date of birth is required";
        const birthDate = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        if (age < 13) return "You must be at least 13 years old";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^[\+]?[1-9][\d]{0,15}$/.test(value.replace(/[\s\-\(\)]/g, ""))) {
          return "Please enter a valid phone number";
        }
        return "";
      case "agreeToTerms":
        if (!value) return "You must agree to the terms and conditions";
        return "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    const allTouched = {};
    Object.keys(formData).forEach((field) => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setIsSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        dateOfBirth: "",
        phone: "",
        agreeToTerms: false
      });
      setTouched({});
    }
  };

  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, label: "" };

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"];
    return { strength, label: labels[strength] };
  };

  // Timer countdown untuk lockout
  React.useEffect(() => {
    if (isLocked && lockoutTimer > 0) {
      const timer = setTimeout(() => {
        setLockoutTimer(lockoutTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (lockoutTimer === 0 && isLocked) {
      setIsLocked(false);
      setLoginAttempts(0);
    }
  }, [isLocked, lockoutTimer]);

  const passwordStrength = getPasswordStrength(formData.password);

  if (isSubmitted) {
    return (
      <div style={styles.app}>
        <div style={styles.card}>
          <div style={styles.successMessage}>
            <h2 style={{ margin: "0 0 1rem 0", fontSize: "2rem" }}>🎉 Success!</h2>
            <p style={{ margin: "0 0 1.5rem 0", fontSize: "1.1rem" }}>
              Thank you for registering. We've sent a confirmation email to your inbox.
            </p>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setShowLogin(true);
              }}
              style={{
                ...styles.submitButton,
                background: "white",
                color: "#10b981",
                fontWeight: "700"
              }}
              onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.target.style.transform = "scale(1)"}
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.app}>
      <div style={styles.card}>
        {showLogin ? (
          <>
            <h2 style={styles.title}>Welcome Back</h2>
            <p style={styles.subtitle}>Login to your account</p>
            
            <div onSubmit={handleLoginSubmit}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email/Username</label>
                <input
                  type="text"
                  name="email"
                  placeholder="your.email@example.com"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  style={styles.input}
                  onFocus={(e) =>                     e.target.style.borderColor = "#59AC77"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  style={styles.input}
                  onFocus={(e) => e.target.style.borderColor = "#667eea"}
                  onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
                  required
                />
              </div>

              <div style={styles.optionsRow}>
                <label style={{ fontSize: "14px", color: "#6b7280", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <input
                    type="checkbox"
                    name="remember"
                    checked={loginData.remember}
                    onChange={handleLoginChange}
                    style={styles.checkbox}
                  />
                  Remember me
                </label>
                <a href="#" style={styles.forgotLink}>
                  Forgot password?
                </a>
              </div>

              <button 
                type="submit" 
                style={{
                  ...styles.submitButton,
                  ...(isLocked ? {
                    background: "linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)",
                    cursor: "not-allowed",
                    opacity: 0.6
                  } : {})
                }}
                disabled={isLocked}
                onMouseOver={(e) => {
                  if (!isLocked) {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 15px 35px rgba(89, 172, 119, 0.5)";
                  }
                }}
                onMouseOut={(e) => {
                  if (!isLocked) {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 10px 25px rgba(89, 172, 119, 0.4)";
                  }
                }}
                onClick={handleLoginSubmit}
              >
                {isLocked ? `Terkunci (${lockoutTimer}s)` : "Login"}
              </button>

              {loginAttempts > 0 && !isLocked && (
                <div style={{
                  textAlign: "center",
                  marginTop: "1rem",
                  padding: "0.75rem",
                  background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                  borderRadius: "8px",
                  color: "#92400e",
                  fontSize: "0.9rem",
                  fontWeight: "600"
                }}>
                  ⚠️ Percobaan gagal: {loginAttempts}/3
                </div>
              )}

              <div style={styles.linkText}>
                Don't have an account?{" "}
                <span style={styles.link} onClick={() => setShowLogin(false)}>
                  Create Account
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 style={styles.title}>Create Account</h1>
            <p style={styles.subtitle}>Create an account to get full access</p>

            <div onSubmit={handleRegisterSubmit}>
              <div style={styles.row}>
                <div>
                  <label style={styles.label}>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    style={{
                      ...styles.input,
                      ...(errors.firstName ? styles.inputError : {})
                    }}
                    onFocus={(e) => !errors.firstName && (e.target.style.borderColor = "#667eea")}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <span style={styles.errorMsg}>{errors.firstName}</span>
                  )}
                </div>

                <div>
                  <label style={styles.label}>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    style={{
                      ...styles.input,
                      ...(errors.lastName ? styles.inputError : {})
                    }}
                    onFocus={(e) => !errors.lastName && (e.target.style.borderColor = "#667eea")}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <span style={styles.errorMsg}>{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={{
                    ...styles.input,
                    ...(errors.email ? styles.inputError : {})
                  }}
                  onFocus={(e) => !errors.email && (e.target.style.borderColor = "#667eea")}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <span style={styles.errorMsg}>{errors.email}</span>
                )}
              </div>

              <div style={styles.row}>
                <div>
                  <label style={styles.label}>Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    style={{
                      ...styles.input,
                      ...(errors.password ? styles.inputError : {})
                    }}
                    onFocus={(e) => !errors.password && (e.target.style.borderColor = "#667eea")}
                    placeholder="Create a strong password"
                  />
                  {formData.password && (
                    <div style={{ marginTop: "0.5rem" }}>
                      <div style={{ display: "flex", gap: "3px", marginBottom: "0.3rem" }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div
                            key={i}
                            style={{
                              ...styles.strengthBar,
                              flex: 1,
                              backgroundColor:
                                i <= passwordStrength.strength
                                  ? ["#ef4444", "#f97316", "#eab308", "#10b981", "#059669"][i - 1]
                                  : "#e5e7eb"
                            }}
                          />
                        ))}
                      </div>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          color:
                            passwordStrength.strength >= 4
                              ? "#10b981"
                              : passwordStrength.strength >= 3
                              ? "#eab308"
                              : "#ef4444"
                        }}
                      >
                        Strength: {passwordStrength.label}
                      </span>
                    </div>
                  )}
                  {errors.password && (
                    <span style={styles.errorMsg}>{errors.password}</span>
                  )}
                </div>

                <div>
                  <label style={styles.label}>Confirm Password *</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    style={{
                      ...styles.input,
                      ...(errors.confirmPassword ? styles.inputError : {})
                    }}
                    onFocus={(e) => !errors.confirmPassword && (e.target.style.borderColor = "#667eea")}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <span style={styles.errorMsg}>{errors.confirmPassword}</span>
                  )}
                </div>
              </div>

              <div style={styles.row}>
                <div>
                  <label style={styles.label}>Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    style={styles.select}
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  {errors.gender && (
                    <span style={styles.errorMsg}>{errors.gender}</span>
                  )}
                </div>

                <div>
                  <label style={styles.label}>Date of Birth *</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    style={{
                      ...styles.input,
                      ...(errors.dateOfBirth ? styles.inputError : {})
                    }}
                    onFocus={(e) => !errors.dateOfBirth && (e.target.style.borderColor = "#667eea")}
                  />
                  {errors.dateOfBirth && (
                    <span style={styles.errorMsg}>{errors.dateOfBirth}</span>
                  )}
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={{
                    ...styles.input,
                    ...(errors.phone ? styles.inputError : {})
                  }}
                  onFocus={(e) => !errors.phone && (e.target.style.borderColor = "#667eea")}
                  placeholder="+1 234 567 8900"
                />
                {errors.phone && (
                  <span style={styles.errorMsg}>{errors.phone}</span>
                )}
              </div>

              <div style={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  style={styles.checkbox}
                />
                <span style={{ fontSize: "0.9rem", color: "#6b7280" }}>
                  I agree to the Terms and Conditions and Privacy Policy
                </span>
              </div>
              {errors.agreeToTerms && (
                <span style={styles.errorMsg}>{errors.agreeToTerms}</span>
              )}

              <button 
                type="submit" 
                style={styles.submitButton}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 15px 35px rgba(89, 172, 119, 0.5)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 25px rgba(89, 172, 119, 0.4)";
                }}
                onClick={handleRegisterSubmit}
              >
                Create Account
              </button>

              <div style={styles.linkText}>
                Already have an account?{" "}
                <span style={styles.link} onClick={() => setShowLogin(true)}>
                  Login
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
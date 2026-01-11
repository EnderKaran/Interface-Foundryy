import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';

const formSchema = z.object({
  // Hesap Bilgileri
  username: z.string().min(3, "Kullanıcı adı en az 3 karakter olmalı"),
  email: z.string().email("Geçerli bir e-posta adresi giriniz"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalı"),
  
  // Adım 2: Kişisel Bilgiler
  fullName: z.string().min(2, "Ad Soyad en az 2 karakter olmalı"),
  portfolio: z.string().url("Geçerli bir URL giriniz (https://...)").optional().or(z.literal("")),
  role: z.string().min(1, "Lütfen bir rol seçiniz"),
});

const steps = [
  {
    id: 'account',
    title: 'Hesap Bilgileri',
    fields: ['username', 'email', 'password']
  },
  {
    id: 'personal',
    title: 'Kişisel Detaylar',
    fields: ['fullName', 'portfolio', 'role']
  },
  {
    id: 'confirm',
    title: 'Onaylama',
    fields: []
  }
];

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onChange' // Yazarken hata kontrolü yap
  });

  
  const formData = watch();

  
  const next = async () => {
    const fields = steps[currentStep].fields;
    
    
    const isValid = await trigger(fields);

    if (isValid) {
      if (currentStep < steps.length - 1) {
        setPreviousStep(currentStep);
        setCurrentStep((step) => step + 1);
      }
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  const onSubmit = (data) => {
    console.log("Form Başarıyla Gönderildi:", data);
    alert("Kayıt Başarılı! Konsola bakabilirsiniz.");
    reset();
    setCurrentStep(0);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-neutral-900/60 border border-neutral-800 rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden flex flex-col min-h-[500px]">
      
      {/* Header & Progress Bar */}
      <div className="p-8 border-b border-neutral-800 bg-neutral-900/80">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Adım {currentStep + 1}
            </span>
            <span className="ml-2 text-lg font-medium text-neutral-500">/ {steps.length}</span>
          </h2>
          <div className="text-sm font-medium text-neutral-400">
             {steps[currentStep].title}
          </div>
        </div>

        {/* İlerleme Çubuğu */}
        <div className="w-full h-2 overflow-hidden rounded-full bg-neutral-800">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Form Alanı */}
      <div className="relative flex-1 p-8 overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between h-full">
            
          {/* Animasyonlu Geçiş Alanı */}
          <div className="relative">
             <AnimatePresence mode='wait' custom={delta}>
                <motion.div
                  key={currentStep}
                  custom={delta}
                  initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: delta >= 0 ? '-50%' : '50%', opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  
                  {currentStep === 0 && (
                    <div className="space-y-5">
                      <div className="group">
                        <label className="block mb-1 text-sm font-medium text-neutral-400">Kullanıcı Adı</label>
                        <input
                          type="text"
                          {...register('username')}
                          className="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none bg-black/50 border-neutral-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="interface_wizard"
                        />
                        {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username.message}</p>}
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-neutral-400">E-posta</label>
                        <input
                          type="email"
                          {...register('email')}
                          className="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none bg-black/50 border-neutral-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="ornek@domain.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-neutral-400">Şifre</label>
                        <input
                          type="password"
                          {...register('password')}
                          className="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none bg-black/50 border-neutral-700 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="••••••••"
                        />
                        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                      </div>
                    </div>
                  )}

                  {/* --- KİŞİSEL BİLGİLER --- */}
                  {currentStep === 1 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-neutral-400">Ad Soyad</label>
                        <input
                          type="text"
                          {...register('fullName')}
                          className="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none bg-black/50 border-neutral-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
                      </div>

                      <div>
                        <label className="block mb-1 text-sm font-medium text-neutral-400">Portfolyo URL (Opsiyonel)</label>
                        <input
                          type="text"
                          {...register('portfolio')}
                          className="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none bg-black/50 border-neutral-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="https://mysite.com"
                        />
                        {errors.portfolio && <p className="mt-1 text-xs text-red-500">{errors.portfolio.message}</p>}
                      </div>

                       <div>
                        <label className="block mb-1 text-sm font-medium text-neutral-400">Rolünüz</label>
                        <select
                          {...register('role')}
                          className="w-full px-4 py-3 text-white transition-all border rounded-lg outline-none bg-black/50 border-neutral-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">Seçiniz...</option>
                            <option value="frontend">Frontend Developer</option>
                            <option value="backend">Backend Developer</option>
                            <option value="designer">UI/UX Designer</option>
                            <option value="fullstack">Full Stack Developer</option>
                        </select>
                        {errors.role && <p className="mt-1 text-xs text-red-500">{errors.role.message}</p>}
                      </div>
                    </div>
                  )}

                  {/* --- ÖZET VE ONAY --- */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                        <div className="p-6 border bg-neutral-800/50 rounded-xl border-neutral-700">
                            <h3 className="mb-4 text-lg font-semibold text-white">Bilgileri Kontrol Et</h3>
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                                <div>
                                    <dt className="text-sm font-medium text-neutral-400">Kullanıcı Adı</dt>
                                    <dd className="mt-1 text-sm text-white">{formData.username}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-neutral-400">E-posta</dt>
                                    <dd className="mt-1 text-sm text-white">{formData.email}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-neutral-400">Ad Soyad</dt>
                                    <dd className="mt-1 text-sm text-white">{formData.fullName}</dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-neutral-400">Rol</dt>
                                    <dd className="mt-1 text-sm text-white capitalize">{formData.role}</dd>
                                </div>
                                {formData.portfolio && (
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-neutral-400">Portfolyo</dt>
                                        <dd className="mt-1 text-sm text-blue-400">{formData.portfolio}</dd>
                                    </div>
                                )}
                            </dl>
                        </div>
                        <p className="text-sm text-center text-neutral-400">
                            Bilgilerin doğruluğundan eminseniz kaydı tamamlayın.
                        </p>
                    </div>
                  )}
                </motion.div>
             </AnimatePresence>
          </div>

          {/* Navigation Butonları */}
          <div className="flex justify-between pt-6 mt-8 border-t border-neutral-800">
            <button
              type="button"
              onClick={prev}
              disabled={currentStep === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                currentStep === 0 
                    ? 'opacity-0 pointer-events-none' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              Geri
            </button>

            {currentStep === steps.length - 1 ? (
              <button
                type="submit"
                className="px-8 py-2 font-bold text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/20 hover:scale-105"
              >
                Kaydı Tamamla
              </button>
            ) : (
              <button
                type="button"
                onClick={next}
                className="flex items-center gap-2 px-8 py-2 font-bold text-black transition-all transform bg-white rounded-lg hover:bg-neutral-200 hover:scale-105"
              >
                İleri
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
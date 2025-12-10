import React from "react";
import "./Workflow.css";

export default function CalibrationDrivenWorkflow() {
  const steps = [
    {
      title: "Data Acquisition",
      desc: ["📂 Collect histopathological datasets", "🧬 LC25000 image repository"],
      color: "light-sky",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2563eb" strokeWidth="2" className="icon">
          <path d="M3 4h18v16H3z" />
          <path d="M3 10h18" />
          <circle cx="8" cy="7" r="1" />
          <circle cx="12" cy="7" r="1" />
          <circle cx="16" cy="7" r="1" />
        </svg>
      ),
    },
    {
      title: "Dataset Preprocessing",
      desc: ["⚙️ Resize, normalize, augment images", "📊 Ensure class balance & diversity"],
      color: "light-blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#0ea5e9" strokeWidth="2" className="icon">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
    {
      title: "Model Training",
      desc: ["🧠 Train CNNs: MobileNetV2, ResNet50", "🔁 5-Fold Cross Validation"],
      color: "light-green",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#10b981" strokeWidth="2" className="icon">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9h6v6H9z" />
        </svg>
      ),
    },
    {
      title: "Ensemble Construction",
      desc: ["🔗 Equal-Weight Fusion", "⚖️ Inverse-NLL & Energy-Aware Top-K"],
      color: "light-orange",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#f59e0b" strokeWidth="2" className="icon">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a8 8 0 1 0-14.8 0" />
        </svg>
      ),
    },
    {
      title: "Performance + Green Metrics",
      desc: ["📈 Accuracy, F1, AUROC, PR-AUC", "⚡ Energy, CO₂, Latency via CodeCarbon"],
      color: "light-purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#9333ea" strokeWidth="2" className="icon">
          <path d="M4 19V13M9 19V9M14 19V5M19 19V11" />
        </svg>
      ),
    },
    {
      title: "Green AI Integration",
      desc: ["🌿 Track energy, latency, CO₂ footprint", "🔋 Promote sustainability benchmarking"],
      color: "light-lime",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#65a30d" strokeWidth="2" className="icon">
          <path d="M12 2v10l8 4-8 4-8-4 8-4" />
        </svg>
      ),
    },
    {
      title: "Temperature Calibration",
      desc: ["🌡 Expected Calibration Error", "✅ Brier Score Adjustment"],
      color: "light-red",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2" className="icon">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
      ),
    },
    {
      title: "Model Evaluation & XAI Analysis",
      desc: ["🔍 Explainability via SHAP, LIME, Grad-CAM", "🧩 Interpret model decisions transparently"],
      color: "light-yellow",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#eab308" strokeWidth="2" className="icon">
          <path d="M12 2a10 10 0 1 1 0 20" />
          <path d="M9 9a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="workflow-container">
      <h2 className="workflow-title">Calibration-Driven Green Ensemble with XAI Workflow</h2>

      <div className="workflow-rows">
        {/* Top Row */}
        <div className="row top-row">
          {steps.slice(0, 4).map((step, index) => (
            <div key={index} className={`workflow-box ${step.color}`}>
              {step.icon}
              <h3>{step.title}</h3>
              <ul>
                {step.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {/* Forward Arrows (left to right) */}
              {index < 3 && (
                <svg className="arrow-line right-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 24">
                  <path d="M0 12h50l-4-4m4 4l-4 4" stroke="gray" strokeWidth="2" fill="none" />
                </svg>
              )}

              {/* Downward Arrow from 4th to 5th box */}
              {index === 3 && (
                <svg className="arrow-line down-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 60">
                  <path d="M12 0v50l-4-4m4 4l4-4" stroke="gray" strokeWidth="2" fill="none" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="row bottom-row">
          {steps.slice(4).reverse().map((step, index) => (
            <div key={index} className={`workflow-box ${step.color}`}>
              {step.icon}
              <h3>{step.title}</h3>
              <ul>
                {step.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>

              {/* Reverse Arrows (right to left) */}
              {index < 3 && (
                <svg className="arrow-line left-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 24">
                  <path d="M60 12H10l4-4m-4 4l4 4" stroke="gray" strokeWidth="2" fill="none" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="workflow-footer">
        Flow: Data → Preprocessing → Training → Ensemble ↓ Performance → Green AI → Calibration → XAI ←
      </p>

      <button onClick={() => window.print()} className="download-btn">
        Download Workflow
      </button>
    </div>
  );
}

import { AlertTriangle } from 'lucide-react';

export default function LegalSidebarWidget() {
  return (
    <div className="bg-amber/5 border border-amber/20 rounded-xl p-5 sticky top-24">
      <div className="flex items-start gap-3 mb-3">
        <AlertTriangle className="w-5 h-5 text-amber shrink-0 mt-0.5" />
        <h3 className="font-bold text-navy text-sm">Aviso importante</h3>
      </div>
      <div className="space-y-2 text-xs text-gray-600 leading-relaxed border-t border-amber/20 pt-3">
        <p className="font-semibold text-navy">Este blog es educativo e informativo.</p>
        <div className="bg-white rounded-lg p-3 border border-gray-100">
          <p className="font-bold text-navy text-xs">EMPRENDIMIENTO YERIKA FRANCO</p>
          <p className="text-gray-500 text-xs mt-0.5">RIF Empresarial: J-508231880</p>
        </div>
        <p>No somos entidad bancaria ni financiera regulada.</p>
        <p>El contenido <strong>no constituye asesoría</strong> financiera, legal ni bancaria profesional.</p>
        <div className="bg-navy/5 rounded-lg p-3 mt-3">
          <p className="text-xs text-navy/70 leading-relaxed">
            <strong className="text-navy">Mercantil Banco</strong> es marca registrada de Mercantil C.A. Banco Universal. 
            Este blog <strong>no tiene afiliación oficial</strong> con dicha institución.
          </p>
        </div>
      </div>
    </div>
  );
}
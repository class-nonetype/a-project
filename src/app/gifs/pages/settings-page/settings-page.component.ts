import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface SettingOption {
  label: string;
  description: string;
  enabled: boolean;
}

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SettingsPageComponent {
  readonly preferences: SettingOption[] = [
    {
      label: 'Notificaciones por correo',
      description: 'Recibe un resumen diario con los cambios relevantes del equipo.',
      enabled: true,
    },
    {
      label: 'Modo oscuro automático',
      description: 'Activa el tema oscuro según la configuración del sistema.',
      enabled: false,
    },
    {
      label: 'Alertas de seguridad',
      description: 'Solicita confirmación en cada inicio de sesión desde un nuevo dispositivo.',
      enabled: true,
    },
  ];
}

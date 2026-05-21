'use client';

import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { useGamificationStore } from '@/stores/gamification-store';
import { getLevelInfo } from '@/lib/gamification/level-system';

export function LevelUpModal() {
  const showLevelUpModal = useGamificationStore((s) => s.showLevelUpModal);
  const setShowLevelUpModal = useGamificationStore((s) => s.setShowLevelUpModal);
  const experience = useGamificationStore((s) => s.experience);

  const levelInfo = getLevelInfo(experience.total_xp);

  return (
    <Modal
      isOpen={showLevelUpModal}
      onClose={() => setShowLevelUpModal(false)}
      title="升級了！"
      showCloseButton={false}
      className="max-w-sm text-center"
    >
      <div className="space-y-4 py-2">
        {/* A03: aria-hidden on decorative emoji; title prop now provides aria-labelledby */}
        <div className="text-5xl" aria-hidden="true">&#127942;</div>
        <div className="space-y-1">
          <p className="text-3xl font-bold text-indigo-600">
            Lv.{levelInfo.level}
          </p>
          <p className="text-sm text-gray-500">{levelInfo.tierLabel}</p>
        </div>
        <p className="text-sm text-gray-600">
          目前累積 {experience.total_xp} XP，繼續加油！
        </p>
        <Button onClick={() => setShowLevelUpModal(false)} className="w-full">
          太棒了！
        </Button>
      </div>
    </Modal>
  );
}

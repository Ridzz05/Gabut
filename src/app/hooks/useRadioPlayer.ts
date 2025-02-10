'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { RadioStation } from '../services/radioApi';

export const useRadioPlayer = () => {
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const previousVolumeRef = useRef(volume);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume / 100;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Handle station changes
  useEffect(() => {
    if (currentStation && audioRef.current) {
      audioRef.current.src = currentStation.streamUrl;
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error: unknown) => {
            if (error instanceof Error) {
              console.warn('Error playing audio:', error.message);
            }
            setIsPlaying(false);
          });
        }
      }
    }
  }, [currentStation, isPlaying]);

  const handlePlay = useCallback(async () => {
    if (!audioRef.current || !currentStation) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.src = currentStation.streamUrl;
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      if (error instanceof Error) {
        console.warn('Error playing audio:', error.message);
      }
      setIsPlaying(false);
    }
  }, [currentStation, isPlaying]);

  const handleStationChange = useCallback((station: RadioStation) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentStation(station);
    setIsPlaying(false);
  }, []);

  const handleVolumeChange = useCallback((newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  }, []);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;

    if (isMuted) {
      handleVolumeChange(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      handleVolumeChange(0);
    }
    setIsMuted(!isMuted);
  }, [isMuted, volume, handleVolumeChange]);

  // Error handling for audio
  useEffect(() => {
    const handleError = (e: ErrorEvent) => {
      if (e.error instanceof Error) {
        console.warn('Audio error:', e.error.message);
      } else {
        console.warn('Audio error occurred');
      }
      setIsPlaying(false);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener('error', handleError as EventListener);
      return () => {
        audioRef.current?.removeEventListener('error', handleError as EventListener);
      };
    }
  }, []);

  return {
    currentStation,
    isPlaying,
    volume,
    isMuted,
    handlePlay,
    handleStationChange,
    handleVolumeChange,
    toggleMute
  };
}; 